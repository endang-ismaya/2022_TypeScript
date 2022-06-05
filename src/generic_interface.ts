interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

function fetch1<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

let res = fetch1<User>("url");
let res2 = fetch1<Product>("url");
