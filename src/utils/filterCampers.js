export const filterCampers = (items, filters) => {
  let result = [...items];

  const { location, form, features } = filters;

  if (location) {
    result = result.filter(item =>
      item.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (form) {
    result = result.filter(item => item.form === form);
  }

  if (features && features.length > 0) {
    result = result.filter(item =>
      features.every(feature => item[feature] === true)
    );
  }

  return result;
};