/**
 * Build a string that resembles pagination based on current page, total pages, and pages to show.
 * There should be the varrots if there is a prev or next page
 * There should be a '*' on current page
 *
 * Ex
 * currentPage: 5, totalPages: 10, pagesToShow: 7
 * => < 2 3 4 5*6 7 8 >
 */

export function pagination(
  currentPage: number,
  totalPages: number,
  pagesToShow: number
): string {
  const pagesBeforeAndAfterCurrent = (pagesToShow - 1) / 2;
  let paginationString = "";
  if (currentPage - pagesBeforeAndAfterCurrent > 1) paginationString += "< ";
  for (
    let i = currentPage - pagesBeforeAndAfterCurrent;
    i <= currentPage + pagesBeforeAndAfterCurrent;
    i++
  ) {
    if (i === currentPage) paginationString += `${i}*`;
    else if (i === currentPage + pagesBeforeAndAfterCurrent)
      paginationString += `${i}`;
    else paginationString += `${i} `;
  }
  if (currentPage + pagesBeforeAndAfterCurrent < totalPages)
    paginationString += " >";
  return paginationString;
}

module.exports = pagination;
