function sooner(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
  const end = new Date(year, month - 1, day, hour, minute, second);
  const now = new Date();
  const duration = end.getTime() - now.getTime();
  const rday = Math.floor(duration / 1000 / 60 / 60 / 24);
  const rhour = Math.floor((duration / 1000 / 60 / 60) % 24);
  const rmin = Math.floor((duration / 1000 / 60) % 60);
  const rsecs = Math.floor((duration / 1000 ) % 60);
  return { rday, rhour, rmin, rsecs }
}

module.exports = sooner;
