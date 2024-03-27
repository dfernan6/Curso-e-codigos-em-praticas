import React from 'react'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  const { min, max } = props

    return (
        <Card title="Soma dos Números" red>
          <div>
            <span>
              <span>Resultado: </span>
                <strong>{ min + max }</strong>  
              </span>
          </div>
        </Card>
    )
}