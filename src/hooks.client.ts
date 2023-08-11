export async function handleError({ error, event }) {
	console.log({ error, event })
	return {
		message: "Whoops!"
	}
}
