const Intern = require("../lib/Intern");
const intern = new Intern(
  "James",
  "7654321",
  "jamestheman@gmail.com",
  "GA Tech"
);

test("test if we can get the constructor values for the manager object", () => {
  expect(intern.name).toBe("James");
  expect(intern.id).toBe("7654321");
  expect(intern.email).toBe("jamestheman@gmail.com");
  expect(intern.school).toBe("GA Tech");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getName()).toBe("James");
});
test("test if we can get the name from the getId() method", () => {
  expect(intern.getId()).toBe("7654321");
});
test("test if we can get the name from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("jamestheman@gmail.com");
});
test("test if we can get the name from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("GA Tech");
});
test("test if we can get the name from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
