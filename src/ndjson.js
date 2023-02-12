/**
 * Takes a string with newline delimited json (i.e., ndjson/jsonlines) and returns
 * a javascript array with parsed entries.
 *
 * Example: {@link https://observablehq.com/@hrbrmstr/hrbrbox Observable notebook}
 *
 * @param {string} [x] - String containing ndjson
 * @returns {array} - Array of parsed JSON objects
 *
 *
 */

export function ndjson(x) {
	return x.trim().split(/\n/).map((d) => JSON.parse(d));
}
