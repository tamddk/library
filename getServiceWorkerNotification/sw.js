notify({ greeting: "Hello" });

async function notify(data) {
  for (let client of await self.clients.matchAll()) {
    client.postMessage(data);
  }
}
