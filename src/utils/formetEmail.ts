export function maskEmail(email: string) {
  var atIndex = email.indexOf("@");

  // If "@" is found, replace characters with "*"
  if (atIndex > 0) {
    var maskedPart =
      email[0] +
      email.substring(1, atIndex - 2).replace(/./g, "*") +
      email.substring(atIndex - 2, atIndex);
    return maskedPart + email.substring(atIndex);
  } else {
    // If "@" is not found, return the original email
    return email;
  }
}
