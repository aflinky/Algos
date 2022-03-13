/**
 * Given an startsay of meeting time intervals consisting of start and end times [[s1, e1], [s2, e2], ...] (si < ei), find the minimum number of conference rooms required
 * ex
 * input: [[0, 30], [5, 10], [15, 20]]
 * output: 2
 * 
 * input: [[7, 10], [2, 4]]
 * output: 1
 */


function meetingRooms(arr: [number, number][]): number {
  // Good to know, are the meeting times sorted in any way?
  // We will assume not
  // First, sort primarily by start times, secondarily by end times
  const starts = arr.sort((a, b) => a[0] - b[0]);
  // console.log('starts', starts)
  const ends = arr.sort((a, b) => a[1] - b[1]);
  // console.log('ends', ends)

  let rooms = 0;
  let last = 0;
  for (let i = 0; i < starts.length; i++) {
    // if the start of the curr in starts (starts[i]) interval is before the end of the last interval in ends, increment rooms
    if (starts[i][0] < ends[last][1]) rooms++;
    // else 
    else last++;
  }

  return rooms;
}

module.exports = meetingRooms;