const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "James",
  "7654321",
  "jamestheman@gmail.com",
  "github"
);

test("test if we can get the constructor values for the manager object", () => {
  expect(engineer.name).toBe("James");
  expect(engineer.id).toBe("7654321");
  expect(engineer.email).toBe("jamestheman@gmail.com");
  expect(engineer.github).toBe("github");
});

test("test if we can get the name from the getName() method", () => {
  expect(engineer.getName()).toBe("James");
});
test("test if we can get the name from the getId() method", () => {
  expect(engineer.getId()).toBe("7654321");
});
test("test if we can get the name from the getEmail() method", () => {
  expect(engineer.getEmail()).toBe("jamestheman@gmail.com");
});
test("test if we can get the name from the getOfficeNumber() method", () => {
  expect(engineer.getGithub()).toBe("github");
});
test("test if we can get the name from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Manager");
});
