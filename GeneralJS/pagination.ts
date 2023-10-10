/**
 * Build a string that resembles pagination based on current page, total pages, and pages to show.
 * There should be the varrots if there is a prev or next page
 * There should be a '*' on current page
 *
 * Assume pages always start at 1
 * Assume pages to show always odd
 *
 * Pages to show may be more than total pages
 *
 * Ex
 * currentPage: 5, totalPages: 10, pagesToShow: 7
 * => < 2 3 4 5*6 7 8 >
 *
 * Ex
 * currentPage: 16, totalPages: 20, pagesToShow: 7
 * => < 13 14 15 16*17 18 19 >
 *
 * Ex (pages to show greater than total pages)
 * currentPage: 1, totalPages: 5, pagesToShow: 7
 * => 1*2 3 4 5
 *
 * Ex (towards end of pages && pages to show greater than total pages)
 * currentPage: 4, totalPages: 5, pagesToShow: 7
 * => 1 2 3 4*5
 *
 * Ex (towards end of pages)
 * currentPage: 18, totalPages: 20, pagesToShow: 7
 * => < 14 15 16 17 18*19 20
 */

export function pagination(
  currentPage: number,
  totalPages: number,
  pagesToShow: number
): string {
  // If the current page were perfectly in between other pages
  // Used to help calculate where the limit is for starting page
  const perfectPagesBeforeAndAfterCurrent = (pagesToShow - 1) / 2;
  let startingPage;
  // If we are near the end of the total pages
  if (currentPage + perfectPagesBeforeAndAfterCurrent + 1 > totalPages) {
    // Starting page will either be 1 (if total pages < pages to show)
    // or whatever page makes it so that the last page is last
    startingPage = Math.max(1, totalPages - pagesToShow + 1);
  } else {
    // If we are in the middle will be nice split
    // If we towards/at the beginning we will be start at 1
    startingPage = Math.max(1, currentPage - perfectPagesBeforeAndAfterCurrent);
  }
  let paginationString = "";
  if (startingPage > 1) paginationString += "< ";
  for (let i = startingPage; i <= startingPage + pagesToShow - 1; i++) {
    if (i === currentPage) paginationString += `${i}*`;
    else if (i === totalPages) {
      paginationString += `${i}`;
      break;
    } else paginationString += `${i} `;
  }
  // If there are more pages, add > (we don't need the space cause it's already covered in for loop)
  if (startingPage + pagesToShow - 1 < totalPages) paginationString += ">";
  return paginationString;
}

module.exports = pagination;
