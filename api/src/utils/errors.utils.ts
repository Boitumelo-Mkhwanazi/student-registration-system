// Utility function to extract a meaningful error message
export const getErrorMessage = (error: any): string => {
    // Check if the error is an instance of Error (in case it is a plain object)
    if (error instanceof Error) {
      return error.message;
    }
    
    // If it's an error object from the database query, extract relevant details
    if (error.code && error.message) {
      return `Database Error: ${error.code} - ${error.message}`;
    }
    
    // Fallback in case no specific message is found
    return "An unknown error occurred";
  };