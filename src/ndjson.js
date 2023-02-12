export function ndjson(x) {
	return x.trim().split(/\n/).map((d) => JSON.parse(d));
}

