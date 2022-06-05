class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("Endang", "Ismaya");
pair.key.toLocaleLowerCase();
