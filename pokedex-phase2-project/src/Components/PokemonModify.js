import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const PokemonModify = ({setSavePoke, hlPokemon, savePoke}) => {
    const [formData, setFormData] = useState({
        id: '',
        nickname: '',
        pokeID: '',
        level: '',
        gender: '',
        nature: '',
        ivHp: '',
        ivAttack: '',
        ivDefense: '',
        ivSpecialAttack: '',
        ivSpecialDefense:'',
        ivSpeed: '',
        evHp: '',
        evAttack: '',
        evDefense: '',
        evSpecialAttack: '',
        evSpecialDefense: '',
        evSpeed: '',
        })

    useEffect(() => {
    setFormData((formData) => {
        return({
            ...formData,
            id: hlPokemon.id,
            nickname: hlPokemon.nickname,
            pokeID: hlPokemon.pokeID,
            level: hlPokemon.level,
            gender: hlPokemon.gender,
            nature: hlPokemon.nature,
            ivHp: hlPokemon.IV.hp,
            ivAttack: hlPokemon.IV.attack,
            ivDefense: hlPokemon.IV.defense,
            ivSpecialAttack: hlPokemon.IV.specialAttack,
            ivSpecialDefense:hlPokemon.IV.specialDefense,
            ivSpeed: hlPokemon.IV.speed,
            evHp: hlPokemon.EV.hp,
            evAttack: hlPokemon.EV.attack,
            evDefense: hlPokemon.EV.defense,
            evSpecialAttack: hlPokemon.EV.specialAttack,
            evSpecialDefense: hlPokemon.EV.specialDefense,
            evSpeed: hlPokemon.EV.speed,
        })
    })}, [hlPokemon])

    const onChangeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const onRangeHandler = (event) => {
        const evSum = formData.evHp + formData.evAttack + formData.evDefense + formData.evSpecialAttack + formData.evSpecialDefense + formData.evSpeed;
        if (evSum < 510) {
            setFormData({
                ...formData,
                [event.target.name] : event.target.value
            })
        }
    }


    const onSubmitHandler = (event) => {
        event.preventDefault()
        const newData = {
            id: parseInt(formData.id),
            nickname: formData.nickname,
            pokeID: parseInt(formData.pokeID),
            level: parseInt(formData.level),
            gender: formData.gender,
            nature: formData.nature,
            IV: {
                hp: parseInt(formData.ivHp),
                attack: parseInt(formData.ivAttack),
                defense: parseInt(formData.ivDefense),
                specialAttack: parseInt(formData.ivSpecialAttack),
                specialDefense:parseInt(formData.ivSpecialDefense),
                speed: parseInt(formData.ivSpeed),
            },
            EV: {
                hp: parseInt(formData.evHp),
                attack: parseInt(formData.evAttack),
                defense: parseInt(formData.evDefense),
                specialAttack: parseInt(formData.evSpecialAttack),
                specialDefense:parseInt(formData.evSpecialDefense),
                speed: parseInt(formData.evSpeed),
            }
        }

        const index = savePoke.findIndex(element => element.id === newData.id)
        const copySavePoke = [...savePoke]
        copySavePoke[index] = newData
        setSavePoke(copySavePoke)
        }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <SectionDiv>
                    <label >Nickname: </label>
                    <input type="search" value={formData.nickname} name="nickname" onChange={onChangeHandler}></input>
                    <label>Level: </label>
                    <Numberinput type="number" value={formData.level} name="level" onChange={onChangeHandler}></Numberinput>
                </SectionDiv>
                <div>
                    <label >Nature: </label> 
                    <select name="nature">
                        <option value="hardy">Hardy</option>
                        <option value="lonely">Lonely</option>
                        <option value="brave">Brave</option>
                        <option value="adamant">Adamant</option>
                        <option value="naughty">Naughty</option>
                        <option value="bold">Bold</option>
                        <option value="docile">Docile</option>
                        <option value="relaxed">Relaxed</option>
                        <option value="impish">Impish</option>
                        <option value="lax">Lax</option>
                        <option value="timid">Timid</option>
                        <option value="hasty">Hasty</option>
                        <option value="serious">Serious</option>
                        <option value="jolly">Jolly</option>
                        <option value="naive">Naive</option>
                        <option value="modest">Modest</option>
                        <option value="mild">Mild</option>
                        <option value="quiet">Quiet</option>
                        <option value="bashful">Bashful</option>
                        <option value="rash">Rash</option>
                        <option value="calm">Calm</option>
                        <option value="gentle">Gentle</option>
                        <option value="sassy">Sassy</option>
                        <option value="careful">Careful</option>
                        <option value="quirky">Quirky</option>
                    </select>
                </div>
                <hr/>
                <IVEVtag>IV</IVEVtag>
                <IVEVdiv>
                    <label> HP </label>
                    <input type="range" min="1" max="31" value={formData.ivHp} name="ivHp" onChange={onChangeHandler}/>
                    <label>{formData.ivHp}</label>

                    <label> SPD </label>
                    <input type="range" min="1" max="31" value={formData.ivSpeed} name="ivSpeed" onChange={onChangeHandler}/>
                    <label>{formData.ivSpeed}</label>
                </IVEVdiv>
                <IVEVdiv>
                    <label> ATK </label>
                    <input type="range" min="1" max="31" value={formData.ivAttack} name="ivAttack" onChange={onChangeHandler}/>
                    <label>{formData.ivAttack}</label>

                    <label> DEF </label>
                    <input type="range" min="1" max="31" value={formData.ivDefense} name="ivDefense" onChange={onChangeHandler}/>
                    <label>{formData.ivDefense}</label>
                </IVEVdiv>
                <IVEVdiv>
                    <label> SP. ATK </label>
                    <input type="range" min="1" max="31" value={formData.ivSpecialAttack} name="ivSpecialAttack" onChange={onChangeHandler}/>
                    <label>{formData.ivSpecialAttack}</label>

                    <label> SP. DEF </label>
                    <input type="range" min="1" max="31" value={formData.ivSpecialDefense} name="ivSpecialDefense" onChange={onChangeHandler}/>
                    <label>{formData.ivSpecialDefense}</label>
                </IVEVdiv>
                <IVEVtag>EV</IVEVtag>
                <IVEVdiv>
                    <label> HP </label>
                    <input type="range" min="0" max="252" value={formData.evHp} name="evHp" onChange={onChangeHandler}/>
                    <label>{formData.evHp}</label>

                    <label> SPD </label>
                    <input type="range" min="0" max="252" value={formData.evSpeed} name="evSpeed" onChange={onChangeHandler}/>
                    <label>{formData.evSpeed}</label>
                </IVEVdiv>
                <IVEVdiv>
                    <label> ATK </label>
                    <input type="range" min="0" max="252" value={formData.evAttack} name="evAttack" onChange={onChangeHandler}/>
                    <label>{formData.evAttack}</label>

                    <label> DEF </label>
                    <input type="range" min="0" max="252" value={formData.evDefense} name="evDefense" onChange={onChangeHandler}/>
                    <label>{formData.evDefense}</label>
                </IVEVdiv>
                <IVEVdiv>
                    <label> SP. ATK </label>
                    <input type="range" min="0" max="252" value={formData.evSpecialAttack} name="evSpecialAttack" onChange={onChangeHandler}/>
                    <label>{formData.evSpecialAttack}</label>

                    <label> SP. DEF </label>
                    <input type="range" min="0" max="252" value={formData.evSpecialDefense} name="evSpecialDefense" onChange={onChangeHandler}/>
                    <label>{formData.evSpecialDefense}</label>
                </IVEVdiv>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default PokemonModify

const IVEVtag = styled.h5`
    margin: 5px;
`

const SectionDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const Numberinput = styled.input`
    width: 50px
`

const IVEVdiv = styled.div`
    height: 50px;
    font-size: 20px
`