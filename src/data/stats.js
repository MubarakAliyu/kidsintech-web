/*
 * stats.js — headline traction numbers (Home stats band, About).
 * Values reflect known traction; confirm/increment as cohorts grow.
 */
export const stats = [
  { id: "cohorts", value: 3, suffix: "", label: "Bootcamp cohorts completed" },
  { id: "students", value: 111, suffix: "+", label: "Students trained" },
  {
    id: "schools",
    value: null,
    suffix: "+",
    label: "Partner schools",
    todo: true,
  }, // TODO: exact count
  {
    id: "hours",
    value: null,
    suffix: "+",
    label: "Learning hours delivered",
    todo: true,
  }, // TODO
];

export default stats;
