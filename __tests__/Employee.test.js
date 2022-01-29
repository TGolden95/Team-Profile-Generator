const Employee = require("../lib/Employee");
const employee = new Employee("James", "7654321", "jamestheman@gmail.com");

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toBe("James");
  expect(employee.id).toBe("7654321");
  expect(employee.email).toBe("jamestheman@gmail.com");
});
test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("James");
});
test("test if we can get the name from the getId() method", () => {
  expect(employee.getId()).toBe("7654321");
});
test("test if we can get the name from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("jamestheman@gmail.com");
});
test("test if we can get the name from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
