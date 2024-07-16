const concatName = (first: string, last: string = 'pocock') => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
};

const result = concatName("John", "Doe");   // works correctly
const result2 = concatName("John");         // doesn't work

export function concatenate(...strings: string[]) {
      return strings.join("");
}

type User = {
    id: string;
    name: string;
  };
  
  const modifyUser = (user: User[], id: string, makeChange: (u: User) => User) => {
    return user.map((u) => {
      if (u.id === id) {
        return makeChange(u);
      }
  
      return u;
    });
  };

  async function fetchData(): Promise<number> {
    const response = await fetch("https://api.example.com/data");
  
    const data = await response.json();
  
    return data;
  }
  const example = async () => {
    const data = await fetchData();
  
    type test = Expect<Equal<typeof data, number>>;
  };