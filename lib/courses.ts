import favoriteCoursesDummy from '../data/favorite_courses.json';
import todaysCoursesDummy from '../data/todays_courses.json';

const DUMMY_TODAYS_COURSES = todaysCoursesDummy;
const DUMMY_FAVORITE_COURSES = favoriteCoursesDummy;

export const getTodaysClasses = () => {
  return DUMMY_TODAYS_COURSES;
};

export const getFavoriteClasses = () => {
  return DUMMY_FAVORITE_COURSES;
};
