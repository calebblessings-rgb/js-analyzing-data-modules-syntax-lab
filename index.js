require('datejs');

function combineUsers(...arrays) {
  const combinedobject = {
    users: [],
    
  };

  for (const array of arrays) {
    combinedobject.users.push(...array);
  }

  combinedobject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedobject;

}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};