-- Set the database name in one line for easy changes
SET @mydb = 'student_registration';

-- Drop and create the database
DROP DATABASE IF EXISTS `student_registration`;
CREATE DATABASE IF NOT EXISTS `student_registration` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `student_registration`;

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `surname` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45),
  `address` VARCHAR(225),
  `city` VARCHAR(100),
  `postalCode` VARCHAR(20),
  `country` VARCHAR(45),
  `dob` DATE,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Faculty`
-- -----------------------------------------------------
CREATE TABLE `Faculty` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `faculty_name_UNIQUE` (`name`)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Lecturer`
-- -----------------------------------------------------
CREATE TABLE `Lecturer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(10) NOT NULL,
  `user_id` INT NOT NULL,
  `faculty_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`faculty_id`) REFERENCES `Faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Student`
-- -----------------------------------------------------
CREATE TABLE `Student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `faculty_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`faculty_id`) REFERENCES `Faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Assessment`
-- -----------------------------------------------------
CREATE TABLE `Assessment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mark` INT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Module`
-- -----------------------------------------------------
CREATE TABLE `Module` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `fee` DECIMAL(10,2) NOT NULL,
  `overview` TEXT NOT NULL,
  `level` VARCHAR(45) NOT NULL,
  `prerequisite` VARCHAR(255),
  `faculty_id` INT NOT NULL,
  `lecturer_id` INT NOT NULL,
  `assessment_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `module_name_UNIQUE` (`name`),
  FOREIGN KEY (`faculty_id`) REFERENCES `Faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`lecturer_id`) REFERENCES `Lecturer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`assessment_id`) REFERENCES `Assessment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Registration`
-- -----------------------------------------------------
CREATE TABLE `Registration` (
  `student_id` INT NOT NULL,
  `module_id` INT NOT NULL,
  `registration_date` DATE,
  `score_mark` INT,
  `percentage` DECIMAL(5,2),
  PRIMARY KEY (`student_id`, `module_id`),
  FOREIGN KEY (`student_id`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`module_id`) REFERENCES `Module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `Newsletter`
-- -----------------------------------------------------
CREATE TABLE `Newsletter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB;






-- ======== ALTER SCRPTS ========
-- Add email to User table
ALTER TABLE `User`
ADD COLUMN `email` VARCHAR(100) NOT NULL AFTER `surname`;

-- Remove title from Lecturer table
ALTER TABLE `Lecturer`
DROP COLUMN `title`;

-- Alter postal code to use snake case 
ALTER TABLE `user`
  CHANGE COLUMN `postalCode` `postal_code` VARCHAR(20),
  CHANGE COLUMN `dob` `dob` DATE;
  
ALTER TABLE module DROP FOREIGN KEY module_ibfk_3;

ALTER TABLE module 
DROP COLUMN assessment_id;

-- Add the img_url attribute
ALTER TABLE module
ADD img_url VARCHAR(255) NULL;

-- add data 
UPDATE module
SET img_url = 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
WHERE name = 'Introduction to Web Development';

-- ======== INSERT SCRIPTS ========

-- Insert lectureres
INSERT INTO user (id, name, surname, email, password, role) VALUES
(1, 'Alice', 'Johnson', 'alice.johnson@example.com', 'hashed_pass_1', 'lecturer'),
(2, 'Bob', 'Smith', 'bob.smith@example.com', 'hashed_pass_2', 'lecturer'),
(3, 'Carol', 'Nguyen', 'carol.nguyen@example.com', 'hashed_pass_3', 'lecturer'),
(4, 'David', 'Brown', 'david.brown@example.com', 'hashed_pass_4', 'lecturer'),
(5, 'Eva', 'Martins', 'eva.martins@example.com', 'hashed_pass_5', 'lecturer'),
(6, 'Frank', 'Liu', 'frank.liu@example.com', 'hashed_pass_6', 'lecturer'),
(7, 'Grace', 'Taylor', 'grace.taylor@example.com', 'hashed_pass_7', 'lecturer'),
(8, 'Hassan', 'Ali', 'hassan.ali@example.com', 'hashed_pass_8', 'lecturer');

INSERT INTO faculty (id, name) VALUES
(1, 'Technology and Computer Science'),
(2, 'Business and Management'),
(3, 'Media and Communication'),
(4, 'Environmental and Natural Sciences');

INSERT INTO lecturer (id, user_id, faculty_id) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 3),
(5, 5, 2),
(6, 6, 3),
(7, 7, 1),
(8, 8, 4);


-- Insert modules 
INSERT INTO module (name, description, fee, overview, level, prerequisite, faculty_id, lecturer_id) VALUES
-- Web Development Track
('Introduction to Web Development', 
 'This course introduces students to the core technologies of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Students will build static and interactive web pages and understand the foundations of client-side development.', 
 500.00, 
 'Begin your journey into front-end web development with foundational tools and principles.', 
 'Beginner', 
 NULL, 
 1, 1),

('Full-Stack JavaScript', 
 'Dive into modern full-stack development using JavaScript technologies. This course covers server-side development with Node.js, frontend frameworks like React, and working with APIs and databases like MongoDB.', 
 800.00, 
 'Develop and deploy full-stack web applications using JavaScript technologies.', 
 'Intermediate', 
 'Introduction to Web Development', 
 1, 2),

('Mobile App Development', 
 'Learn to build mobile applications for both Android and iOS using frameworks like Flutter and React Native. This course explores cross-platform development, UI design, mobile APIs, and deployment strategies.', 
 850.00, 
 'Design and deploy beautiful, functional mobile apps using modern cross-platform tools.', 
 'Intermediate', 
 'Full-Stack JavaScript', 
 1, 2),

('Progressive Web Apps', 
 'This course teaches students to create fast, reliable, and installable web applications that bridge the gap between native apps and websites. Students will use service workers, caching, and manifest files to improve offline access and performance.', 
 600.00, 
 'Enhance your full-stack skills by learning to create installable, performant web apps.', 
 'Advanced', 
 'Mobile App Development', 
 1, 3),

-- Data Science Track
('Data Science Fundamentals', 
 'Get a practical introduction to the world of data science. Learn Python programming, statistics, and data visualization using libraries such as pandas, NumPy, and Matplotlib. Gain foundational skills to analyze and interpret data.', 
 900.00, 
 'Learn core data science concepts and Python tools for data analysis.', 
 'Beginner', 
 NULL, 
 1, 3),

('Applied Data Analytics', 
 'Build on your foundation with hands-on projects in data wrangling, advanced visualization, and storytelling. Learn to clean messy datasets and use tools like Tableau and Power BI for insights.', 
 950.00, 
 'Turn data into decisions using modern analytics tools and methods.', 
 'Intermediate', 
 'Data Science Fundamentals', 
 1, 3),

('Advanced Machine Learning', 
 'Take a deep dive into machine learning algorithms including decision trees, SVMs, neural networks, and deep learning. Work with Scikit-learn, TensorFlow, and real-world datasets.', 
 1200.00, 
 'Build and evaluate predictive models using state-of-the-art techniques.', 
 'Advanced', 
 'Applied Data Analytics', 
 1, 3),

-- Communication & Business Track
('Business Communication', 
 'This course focuses on developing communication skills for the workplace, including effective writing, speaking, presenting, and collaborating across teams and cultures. Emphasis is on clarity, professionalism, and purpose.', 
 450.00, 
 'Master core communication skills needed in any business environment.', 
 'Beginner', 
 NULL, 
 3, 4),

('Marketing Strategies', 
 'Explore modern marketing principles, including branding, market research, digital campaigns, and consumer psychology. Students will develop strategic marketing plans and learn to evaluate their effectiveness.', 
 600.00, 
 'Plan and execute marketing strategies that drive results.', 
 'Intermediate', 
 'Business Communication', 
 2, 5),

('Digital Media & Journalism', 
 'Learn to research, write, and produce compelling digital content. This course covers writing for the web, podcasting, online video, and ethics in digital journalism. Students will create content for real audiences.', 
 550.00, 
 'Tell impactful stories through digital media and online platforms.', 
 'Intermediate', 
 'Business Communication', 
 3, 6),

-- Engineering / Science Track
('Software Engineering Principles', 
 'An in-depth look into software design, version control, project management methodologies (Agile, Scrum), and testing strategies. Students will develop maintainable, scalable software solutions in teams.', 
 750.00, 
 'Build robust and well-structured software using best practices and engineering principles.', 
 'Intermediate', 
 'Full-Stack JavaScript', 
 1, 7),

('Environmental Science', 
 'Gain an understanding of how human actions impact the environment. Topics include climate change, renewable energy, sustainability practices, and global environmental policies.', 
 400.00, 
 'Examine environmental challenges and solutions for a sustainable future.', 
 'Beginner', 
 NULL, 
 4, 8);

-- Insert Student
INSERT INTO user (id, name, surname, email, password, role) VALUES
(9,  'Ivy',      'Adams',      'ivy.adams@example.com',      'hashed_pass_9',  'student'),
(10, 'Jack',     'Baker',      'jack.baker@example.com',     'hashed_pass_10', 'student'),
(11, 'Kara',     'Clark',      'kara.clark@example.com',     'hashed_pass_11', 'student'),
(12, 'Liam',     'Davis',      'liam.davis@example.com',     'hashed_pass_12', 'student'),
(13, 'Mona',     'Evans',      'mona.evans@example.com',     'hashed_pass_13', 'student'),
(14, 'Noah',     'Foster',     'noah.foster@example.com',    'hashed_pass_14', 'student'),
(15, 'Olga',     'Garcia',     'olga.garcia@example.com',    'hashed_pass_15', 'student'),
(16, 'Paul',     'Harris',     'paul.harris@example.com',    'hashed_pass_16', 'student'),
(17, 'Quinn',    'Irwin',      'quinn.irwin@example.com',    'hashed_pass_17', 'student'),
(18, 'Rita',     'Jones',      'rita.jones@example.com',     'hashed_pass_18', 'student'),
(19, 'Sam',      'Kim',        'sam.kim@example.com',        'hashed_pass_19', 'student'),
(20, 'Tina',     'Lopez',      'tina.lopez@example.com',     'hashed_pass_20', 'student'),
(21, 'Uma',      'Morris',     'uma.morris@example.com',     'hashed_pass_21', 'student'),
(22, 'Viktor',   'Nash',       'viktor.nash@example.com',    'hashed_pass_22', 'student'),
(23, 'Wendy',    'Owens',      'wendy.owens@example.com',    'hashed_pass_23', 'student'),
(24, 'Xander',   'Patel',      'xander.patel@example.com',   'hashed_pass_24', 'student'),
(25, 'Yara',     'Quinn',      'yara.quinn@example.com',     'hashed_pass_25', 'student'),
(26, 'Zane',     'Reed',       'zane.reed@example.com',      'hashed_pass_26', 'student'),
(27, 'Ava',      'Stone',      'ava.stone@example.com',      'hashed_pass_27', 'student'),
(28, 'Ben',      'Turner',     'ben.turner@example.com',     'hashed_pass_28', 'student');

-- Mapping to Student ID's
INSERT INTO student (id, user_id, faculty_id) VALUES
(9,  9,  2),
(10, 10, 4),
(11, 11, 1),
(12, 12, 3),
(13, 13, 2),
(14, 14, 1),
(15, 15, 4),
(16, 16, 3),
(17, 17, 1),
(18, 18, 2),
(19, 19, 4),
(20, 20, 3),
(21, 21, 1),
(22, 22, 2),
(23, 23, 3),
(24, 24, 4),
(25, 25, 1),
(26, 26, 2),
(27, 27, 3),
(28, 28, 4);

-- Mapping student & module to registration
INSERT INTO registration (student_id, module_id, registration_date, score_mark, percentage) VALUES
(9,  1,  '2024-02-15', 78, 78.00),
(9,  5,  '2024-03-10', 85, 85.00),
(10, 2,  '2024-01-20', 92, 92.00),
(10, 7,  '2024-04-05', 74, 74.00),
(11, 3,  '2024-05-12', 88, 88.00),
(12, 1,  '2024-02-28', 67, 67.00),
(12, 6,  '2024-03-22', 79, 79.00),
(13, 4,  '2024-01-15', 90, 90.00),
(14, 8,  '2024-06-01', 55, 55.00),
(15, 9,  '2024-03-18', 82, 82.00),
(15, 2,  '2024-04-10', 77, 77.00),
(16, 5,  '2024-05-20', 69, 69.00),
(17, 7,  '2024-02-25', 95, 95.00),
(18, 3,  '2024-06-07', 80, 80.00),
(19, 10, '2024-01-30', 73, 73.00),
(20, 12, '2024-04-15', 88, 88.00),
(21, 1,  '2024-05-05', 91, 91.00),
(21, 11, '2024-03-28', 76, 76.00),
(22, 6,  '2024-02-10', 84, 84.00),
(23, 8,  '2024-01-22', 62, 62.00),
(24, 9,  '2024-06-10', 79, 79.00),
(25, 4,  '2024-03-03', 85, 85.00),
(26, 7,  '2024-04-18', 90, 90.00),
(27, 10, '2024-05-25', 68, 68.00),
(28, 12, '2024-02-14', 74, 74.00),
(28, 1,  '2024-01-19', 81, 81.00);

-- Adding province field
ALTER TABLE user
ADD province VARCHAR(255) NOT NULL;

-- Making province nullable
ALTER TABLE user
MODIFY COLUMN province VARCHAR(255) NULL;

-- Added column to store image url
ALTER TABLE module
ADD img_url VARCHAR(255) NULL;