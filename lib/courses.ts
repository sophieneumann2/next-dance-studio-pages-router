import _ from 'lodash';
import todaysCoursesDummy from '../data/todays_courses.json';

const DUMMY_TODAYS_COURSES = todaysCoursesDummy;

/* 

FAKE API RESPONSE:

- id: not unique
- course name: double, not defined
- time: double, not defined, wrong type

GOAL DATA STRUCTURE:

- id: unique
- course name: one per entry, defined & not empty
- time: one per entry, type string, defined & not empty

*/

export const getTodaysClasses = () => {
  const structuredDataResponse = _.chain(DUMMY_TODAYS_COURSES)
    .filter((course) => _.has(course, 'id'))
    .filter(
      (course) => _.has(course, 'course_name') && course.course_name.length > 0,
    )
    .filter(
      (course) => _.has(course, 'time') && typeof course.time === 'string',
    )
    .uniqBy('id')
    .value();
  return structuredDataResponse;
};
