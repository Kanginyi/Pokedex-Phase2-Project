import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const PokemonAbility = ({ability}) => {

    const [abilityAPI, setAbilityAPI] = useState(null)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
        .then(resp => resp.json())
        .then(data => setAbilityAPI(data))
    }, [ability])

    if (abilityAPI) {
        const arrayAbilities = abilityAPI.effect_entries
        return (
            <Tooltip data-tooltip={arrayAbilities.length? arrayAbilities[1]["short_effect"].slice(0, -1) : null}>
                {ability.slice(0,1).toUpperCase() + ability.slice(1)}
            </Tooltip>
        )
    }
    else {
        return (
            null
        )
    }
    
}

export default PokemonAbility

const Tooltip = styled.div`
    position: relative;
    &:before, :after {
        --scale: 0;
        --arrow-size: 10px;
        --tooltip-color: #333;
        position: absolute;
        top: -0.25rem;
        left: 50%;
        transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
        transition: 50ms transform;
        transform-origin: bottom center;
    }
    &:before {
        --translate-y: calc(-100% - var(--arrow-size));
        content: attr(data-tooltip);
        padding: .01rem;
        width: max-content;
        color:white;
        max-width:350px;
        background: #333;
        border-radius: .3rem;
        text-align: center;
    }
    &:hover:before, :hover:after  {
        --scale: 1;
    }
    &after {
        --translate-y: calc(-1 * var(--arrow-size)):

        content: '';
        border: var(--arrow-size) transparent;
        border-top-color: var(--tooltip-color);
        transform-origin: top-center
    }
`