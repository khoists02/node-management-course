export const ERROR = {
  ERROR_FORBIDDEN: {
    message: "Forbidden",
    code: 403,
  },
  ERROR_UNAUTHORISED: {
    message: "Unauthorised",
    code: 401,
  },
  ERROR_INVALID_TOKEN: {
    message: "Unauthorised: Invalid Token",
    code: 1000,
  },
  ERROR_INVALID_JWT: {
    message: "JWT: Invalid Sign",
    code: 1993,
  },
  ERROR_INVALID_CREDENTIALS: {
    message: "Unauthorised: Invalid Credentials",
    code: 1001,
  },
  ERROR_EXPIRED_TOKEN: {
    message: "Unauthorised: Token Expired",
    code: 1002,
  },
  ERROR_INSUFFICIENT_PERMISSIONS: {
    message: "Forbidden: Insufficient Permissions",
    code: 1003,
  },
  ERROR_CLIENT_ID_NOT_PROVIDED: {
    message: "Unauthorised: Client ID Not Provided",
    code: 1004,
  },
  ERROR_TENANT_ACCESS_DENIED: {
    message: "Unauthorised: Tenant Access Denied",
    code: 1005,
  },
  ERROR_TENANT_USER_NOT_FOUND: {
    message: "Unauthorised: User Not Found",
    code: 1006,
  },
  ERROR_INACTIVE_USER: {
    message: "Unauthorised: User Is Inactive",
    code: 1007,
  },
  ERROR_AUTHENTICATION_RATE_LIMITED: {
    message: "Unauthorised: User Authentication Rate Limited",
    code: 1008,
  },
  ERROR_NO_CLIENT_ACCESS: {
    message: "Forbidden: No Access To Client",
    code: 1009,
  },
  ERROR_DATABASE_GENERIC_ERROR: {
    message: "Generic Database Error",
    code: 1100,
  },
  ERROR_DATABASE_MASTER_CONNECTION_ERROR: {
    message: "Unable To Connect To Master Database",
    code: 1101,
  },
  ERROR_DATABASE_TENANT_CONNECTION_ERROR: {
    message: "Unable To Connect To Tenant Database",
    code: 1102,
  },

  ERROR_TENANCY_INVALID_CLIENT_ID: {
    message: "Invalid Client ID",
    code: 1201,
  },

  // Account Module
  ERROR_ACCOUNT_KEYCLOAK_REQUEST_FAILED: {
    message: "Keycloak Request Failed",
    code: 1300,
  },
  ERROR_ACCOUNT_KEYCLOAK_INVALID_REQUEST: {
    message: "Keycloak Invalid Request",
    code: 1301,
  },
  ERROR_ACCOUNT_KEYCLOAK_INVALID_GRANT: {
    message: "Keycloak Invalid Grant",
    code: 1302,
  },
  ERROR_ACCOUNT_KEYCLOAK_UNAUTHORIZED_CLIENT: {
    message: "Keycloak Unauthorized Client",
    code: 1303,
  },
  ERROR_ACCOUNT_KEYCLOAK_TIMEOUT_ERROR: {
    message: "Keycloak Request Timeout Error",
    code: 1304,
  },
  ERROR_ACCOUNT_KEYCLOAK_CONNECTION_REFUSED: {
    message: "Keycloak Request Connection Refused",
    code: 1305,
  },

  ERROR_TRANSITIONS_ILLEGAL_STATE_CHANGE: {
    message: "Illegal Status Transition",
    code: 1400,
  },

  ERROR_VERIFICATION_BAD_STATUS: {
    message: "Unable to Verify, Bad Case Status",
    code: 1601,
  },
  ERROR_VERIFICATION_BAD_QUALIFICATIONS: {
    message: "Unable to Verify, Unqualified",
    code: 1602,
  },
  ERROR_VERIFICATION_DUPLICATE_VERIFICATION: {
    message: "Unable to Verify, Can't Verify The Same Report Twice",
    code: 1603,
  },

  ERROR_BAD_CASE_STATUS: {
    message: "Unable to assign case with current status",
    code: 1800,
  },
  ERROR_REPORTING_BAD_QUALIFICATIONS: {
    message: "Unable to assign case to an unqualified radiologist",
    code: 1801,
  },
  ERROR_DELETE_BAD_CASE_STATUS: {
    message: "Unable to delete case with current status",
    code: 1802,
  },
  ERROR_BAD_TENANT_ACCESS: {
    message: "Unable to assign case to user without tenant access",
    code: 1803,
  },
  ERROR_BAD_UPDATE_CASE_STATUS: {
    message: "Unable to update case with current status",
    code: 1803,
  },
  ERROR_CASE_UPDATE_DATABASE: {
    message: "Unable update case",
    code: 1804,
  },
  ERROR_CASE_SAVE_DATABASE: {
    message: "Unable save case",
    code: 1805,
  },
  ERROR_CASE_NOT_EXISTS: {
    message: "The case not exists",
    code: 1806,
  },
  ERROR_DICTATION_BAD_QUALIFICATIONS: {
    message: "Unable to Dictate, Unqualified",
    code: 1701,
  },

  ERROR_TRANSCRIPTION_BAD_STATUS: {
    message: "Unable to Transcribe, Bad Case Status",
    code: 1901,
  },
  ERROR_UNVERIFY_BAD_STATUS: {
    message: "Unable to Unverify, Bad Case Status",
    code: 1902,
  },
  ERROR_RESTORE_DISTRIBUTED_REPORT: {
    message: "Unable to restore a distributed report ",
    code: 1903,
  },

  ERROR_PACS_INTEGRATION_NOT_FOUND: {
    message: "PACS Integration Not Found",
    code: 2002,
  },

  ERROR_BAD_SLA_RULE: {
    message: " Unable to delete an SLA which is used by SLA Rules",
    code: 2101,
  },

  ERROR_BAD_DISTRIBUTION_STATUS: {
    message:
      "There is a change in the distribution Status. Please reload the page to continue",
    code: 2201,
  },

  ERROR_BAD_DISTRIBUTION_CASE_STATUS: {
    message:
      "Unable to redistribute a case when the case entry is either verified or distributed",
    code: 2202,
  },

  ERROR_BAD_REPORT_STATUS: {
    message: "Unable to do operation of the report with current status",
    code: 2211,
  },

  ERROR_DASHBOARD_TYPE: {
    message: "Unable to share a user dashboard",
    code: 2301,
  },

  // Patient Related Errors
  ERROR_PATIENT_ERROR: {
    message: "Patient error",
    code: 2400,
  },

  ERROR_PATIENT_ALREADY_MERGED: {
    message: "Unable to merge a Patient that is already merged",
    code: 2401,
  },

  ERROR_PATIENT_MASTER_CANNOT_BE_CHILD: {
    message: "Unable to merge a Patient into the child of another Patient",
    code: 2402,
  },

  ERROR_PATIENT_MASTER_AND_CHILD_MUST_BE_DIFFERENT: {
    message:
      "Unable to merge the Patient. Master and Child Patients must not be the same",
    code: 2403,
  },

  ERROR_PATIENT_INCORRECT_PATIENT_MERGE: {
    message: "Unable to continue, the Patient merge is incorrect",
    code: 2404,
  },

  ERROR_DELETE_BAD_SHIFT: {
    message: "Unable to delete a scheduled shift",
    code: 2501,
  },

  // Subspecialty errors
  ERROR_CANNOT_DISABLE_USED_SUBSPECIALTY: {
    message: "Subspecialty is in use",
    code: 2601,
  },

  ERROR_ADDENDUM_REQUEST_SAVE_DATABASE: {
    message: "Unable save addendum request",
    code: 1804,
  },

  // Change password
  ERROR_NOT_MATCH_CURRENT_PASSWORD: {
    message: "The current password do not match",
    code: 2700,
  },
  ERROR_INVALID_PASSWORD_MIN_LENGTH_MESSAGE: {
    message: "Invalid password minimum length",
    code: 2701,
  },
  ERROR_INVALID_PASSWORD_HISTORY_MESSAGE: {
    message: "Invalid password must not be equal to any of last passwords",
    code: 2702,
  },
  ERROR_INVALID_PASSWORD_BLACKLISTED_MESSAGE: {
    message: "Invalid password is blacklisted",
    code: 2703,
  },
  ERROR_INVALID_PASSWORD_REGEX_PATTERN_MESSAGE: {
    message: "Invalid password fails to match regex pattern",
    code: 2704,
  },
  ERROR_INVALID_PASSWORD_NOT_USERNAME_MESSAGE: {
    message: "Invalid password must not be equal to the username",
    code: 2705,
  },
  ERROR_INVALID_PASSWORD_MIN_SPECIAL_CHARS_MESSAGE: {
    message: "Invalid password must contain at least special characters",
    code: 2706,
  },
  ERROR_INVALID_PASSWORD_MIN_UPPERCASE_CHARS_MESSAGE: {
    message: "Invalid password must contain at least upper case characters",
    code: 2707,
  },
  ERROR_INVALID_PASSWORD_MIN_LOWERCASE_CHARS_MESSAGE: {
    message: "Invalid password must contain at least lower case characters",
    code: 2708,
  },
  ERROR_INVALID_PASSWORD_MIN_DIGITS_MESSAGE: {
    message: "Invalid password must contain at least numerical digits",
    code: 2709,
  },
  ERROR_CHANGE_PASSWORD: {
    message: "Cannot change password",
    code: 2710,
  },
  ERROR_NEW_PASSWORD_MUST_BE_DIFFERENCE_CURRENT_PASSWORD: {
    message: "The new password must be difference to current password",
    code: 2711,
  },
  ERROR_USER_NAME_EXIST: {
    message: "The username already exists",
    code: 2800,
  },
  // Roles
  ERROR_ROLE_CREATE: {
    message: "Create role failed.",
    code: 2801,
  },
  ERROR_ROLE_NAME_NULL: {
    message: "Create role failed. Role name can not be blank.",
    code: 2802,
  },
  ERROR_USER_PASSWORD_COMPARE_WRONG: {
    message: "Password compare can't the same the password .",
    code: 2803,
  },
};
