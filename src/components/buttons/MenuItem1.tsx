import React from 'react'
import styled from 'styled-components'

const MenuItem1 = ({...props}) => {
    return (
        <LayoutRoot {...props}>
            MenuItem1
        </LayoutRoot>
    )
}

export default MenuItem1;

const LayoutRoot = styled(Gap8VerticalFlex)`
    
`