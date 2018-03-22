export const DUMMY_DATA: any = {

  1: {
    id: 1,
    description: 'First',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  },
  2: {
    id: 2,
    description: 'Second',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  },
  3: {
    id: 3,
    description: 'Third',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  },
};

export function findById(courseId: number) {
  return DUMMY_DATA[courseId];
}
