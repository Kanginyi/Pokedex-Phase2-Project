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

    const totalStats = {
        hp : base.hp ? Math.floor(0.01*(2*base.hp+hlPokemon.IV.hp+Math.floor(0.25 * hlPokemon.EV.hp))*hlPokemon.level)+hlPokemon.level + 10: 0,
        attack : base.attack? Math.floor(0.01*(2*base.attack+hlPokemon.IV.attack+Math.floor(0.25 * hlPokemon.EV.attack))*hlPokemon.level) + 5 : 0,
        defense : base.defense? Math.floor(0.01*(2*base.defense+hlPokemon.IV.defense+Math.floor(0.25 * hlPokemon.EV.defense))*hlPokemon.level) + 5 : 0,
        specAttack : base.specialAttack? Math.floor(0.01*(2*base.specialAttack+hlPokemon.IV.specialAttack+Math.floor(0.25 * hlPokemon.EV.specialAttack))*hlPokemon.level) + 5 : 0,
        specDefense : base.specialDefense? Math.floor(0.01*(2*base.specialDefense+hlPokemon.IV.specialDefense+Math.floor(0.25 * hlPokemon.EV.specialDefense))*hlPokemon.level) + 5 : 0,
        speed : base.speed? Math.floor(0.01*(2*base.speed+hlPokemon.IV.speed+Math.floor(0.25 * hlPokemon.EV.speed))*hlPokemon.level) + 5 : 0,
    }

    switch(hlPokemon.nature) {
        case 'lonely' :
            totalStats.attack *= 1.1
            totalStats.defense*= 0.9
            break;
        case 'brave' :
            totalStats.attack *= 1.1
            totalStats.speed*= 0.9
            break;
        case 'adamant' :
            totalStats.attack *= 1.1
            totalStats.specAttack*= 0.9
            break;
        case 'naughty' :
            totalStats.attack *= 1.1
            totalStats.specDefense*= 0.9
            break;
        case 'bold' :
            totalStats.defense *= 1.1
            totalStats.attack*= 0.9
            break;
        case 'relaxed' :
            totalStats.defense *= 1.1
            totalStats.speed*= 0.9
            break;
        case 'impish' :
            totalStats.defense *= 1.1
            totalStats.specAttack*= 0.9
            break;    
        case 'lax' :
            totalStats.defense *= 1.1
            totalStats.specDefense*= 0.9
            break;    
        case 'timid' :
            totalStats.speed *= 1.1
            totalStats.attack*= 0.9
            break;
        case 'hasty' :
            totalStats.speed *= 1.1
            totalStats.defense*= 0.9
            break;
        case 'jolly' :
            totalStats.speed *= 1.1
            totalStats.specAttack*= 0.9
            break;    
        case 'naive' :
            totalStats.speed *= 1.1
            totalStats.specDefense*= 0.9
            break;
        case 'modest' :
            totalStats.specAttack *= 1.1
            totalStats.attack*= 0.9
            break;
        case 'mild' :
            totalStats.specAttack *= 1.1
            totalStats.defense*= 0.9
            break;
        case 'quiet' :
            totalStats.specAttack *= 1.1
            totalStats.speed*= 0.9
            break;
        case 'rash' :
            totalStats.specAttack *= 1.1
            totalStats.specDefense*= 0.9
            break;
        case 'calm' :
            totalStats.specDefense *= 1.1
            totalStats.attack*= 0.9
            break;
        case 'gentle' :
            totalStats.specDefense *= 1.1
            totalStats.defense*= 0.9
            break;
        case 'sassy' :
            totalStats.specDefense *= 1.1
            totalStats.speed*= 0.9
            break;
        case 'careful' :
            totalStats.specDefense *= 1.1
            totalStats.specAttack*= 0.9
            break;
        default:
            break;
    }
    const finalStats = {
        hp : totalStats.hp ? Math.floor(totalStats.hp) : 0,
        attack : totalStats.attack ? Math.floor(totalStats.attack) : 0,
        defense : totalStats.defense ? Math.floor(totalStats.defense) : 0,
        specAttack : totalStats.specAttack ? Math.floor(totalStats.specAttack) : 0,
        specDefense : totalStats.specDefense ? Math.floor(totalStats.specDefense) : 0,
        speed : totalStats.speed ? Math.floor(totalStats.speed) : 0,
    }

    return (
        <div>
            <Radar
                data={{
                    labels: ['HP','ATK','DEF','SP. ATK','SP. DEF','SPD'],
                    datasets: [
                        {
                            legend: 'Stats',
                            data: [finalStats.hp, finalStats.attack, finalStats.defense, finalStats.specAttack, finalStats.specDefense, finalStats.speed],
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
