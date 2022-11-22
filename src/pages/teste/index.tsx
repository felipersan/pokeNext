import { useEffect } from "react";
import API from "../../services/pokeAPI";

export default function Teste() {
  useEffect(() => {
    getObject();
  }, []);
  async function getObject() {
    await API.get(`pokemon?limit=1400&offset=0`).then((response: any) => {
      let paths:any = [];
      response.data.results.map((row: any) => {
        let newObject = {
          params: {
            name: row?.name,
          },
        };
        paths.push(newObject)
      });
      console.log(paths)
    });
  }
  return <p>Página de teste</p>;
}
