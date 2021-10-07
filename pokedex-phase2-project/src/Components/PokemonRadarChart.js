import React, {useState, useEffect} from 'react'
import { Radar } from 'react-chartjs-2'

const PokemonRadarChart = ({hlPokemon, highestStat}) => {
    const [pokeAPI, setPokeAPI] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${hlPokemon.pokeID}`)
        .then(resp => resp.json())
        .then(data => (setPokeAPI(data)))
    }, [hlPokemon])

    const base = {
        hp : pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'hp')].base_stat,
        attack : pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'attack')].base_stat,
        defense: pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'defense')].base_stat,
        specialAttack : pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'special-attack')].base_stat,
        specialDefense : pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'special-defense')].base_stat,
        speed : pokeAPI?.stats[Object.keys(pokeAPI.stats).find(num => pokeAPI.stats[num].stat.name === 'speed')].base_stat,
    }

    console.log(hlPokemon.EV)

    const hp = base.hp ? Math.floor(0.01*(2*base.hp+hlPokemon.IV.hp+Math.floor(0.25 * hlPokemon.EV.hp))*hlPokemon.level)+hlPokemon.level + 10 : 0;
    const attack = base.attack? Math.floor(0.01*(2*base.attack+hlPokemon.IV.attack+Math.floor(0.25 * hlPokemon.EV.attack))*hlPokemon.level) + 5 : 0;
    const defense = base.defense? Math.floor(0.01*(2*base.defense+hlPokemon.IV.defense+Math.floor(0.25 * hlPokemon.EV.defense))*hlPokemon.level) + 5 : 0;
    const specAttack = base.specialAttack? Math.floor(0.01*(2*base.specialAttack+hlPokemon.IV.specialAttack+Math.floor(0.25 * hlPokemon.EV.specialAttack))*hlPokemon.level) + 5 : 0;
    const specDefense = base.specialDefense? Math.floor(0.01*(2*base.specialDefense+hlPokemon.IV.specialDefense+Math.floor(0.25 * hlPokemon.EV.specialDefense))*hlPokemon.level) + 5 : 0;
    const speed = base.speed? Math.floor(0.01*(2*base.speed+hlPokemon.IV.speed+Math.floor(0.25 * hlPokemon.EV.speed))*hlPokemon.level) + 5 : 0;

    return (
        <div>
            <Radar
                data={{
                    labels: ['HP','ATK','DEF','SP. ATK','SP. DEF','SPD'],
                    datasets: [
                        {
                            legend: 'Stats',
                            data: [hp, attack, defense, specAttack, specDefense, speed],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ]
                        }
                    ]
                }}
                height={300}
                width={300}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        r: {
                            min: 0,
                            max: Math.ceil(highestStat / 50)*50,
                            // ticks: {
                            //     stepSize: 20,
                            // }
                        }
                        },
                    tooltips: false,
                    plugins:{
                        legend: {
                            display: false
                        },
                        datalabels: {
                            formatter: function(value, context) {
                                return context.chart.data.labels[context.value];
                            }
                        }
                    },
                    }
                }
            />
        </div>
    )
}

export default PokemonRadarChart
