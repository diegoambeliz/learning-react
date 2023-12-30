import axios from 'axios';
import { Game } from './models/games';
import { ZeldaGameRow } from './components/ZeldaGameRow';

let games: JSX.Element[];

const getGames = (data: Game) => {
    return data.data.map(game => {
        return <ZeldaGameRow game={game}></ZeldaGameRow>
    })
}
axios.get<Game>('https://zelda.fanapis.com/api/games')
    .then(function (response) {
        games = getGames(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

export function ZeldaTable() {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"></link>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Crud</span>
                                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal">Crud por una api</span>
                                </h3>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">TASK</th>
                                                <th className="pb-3 text-end min-w-[100px]">OWNER</th>
                                                <th className="pb-3 text-end min-w-[100px]">PROGRESS</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                                                <th className="pb-3 pr-12 text-end min-w-[100px]">DEADLINE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {games}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}