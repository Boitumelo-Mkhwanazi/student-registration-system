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
