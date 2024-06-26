"use client";

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "@/app/api/config";
import {useGetDataByCategory} from '../api/api-hooks'
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const newGames = useGetDataByCategory(
			endpoints.games,
			'new'
		)
console.log(newGames)
    return (
       <main className={"main-inner"}>
       {newGames ?  <CardsListSection  id="new" title="Новинки" data={newGames}/>: <Preloader />}
      </main>
    );
}