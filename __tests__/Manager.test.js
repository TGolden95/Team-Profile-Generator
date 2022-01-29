const Manager = require("../lib/Manager");
const manager = new Manager("James", "7654321", "jamestheman@gmail.com", "404");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toBe("James");
  expect(manager.id).toBe("7654321");
  expect(manager.email).toBe("jamestheman@gmail.com");
  expect(manager.officeNumber).toBe("404");
});

test("test if we can get the name from the getName() method", () => {
  expect(manager.getName()).toBe("James");
});
test("test if we can get the name from the getId() method", () => {
  expect(manager.getId()).toBe("7654321");
});
test("test if we can get the name from the getEmail() method", () => {
  expect(manager.getEmail()).toBe("jamestheman@gmail.com");
});
test("test if we can get the name from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("404");
});
test("test if we can get the name from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
