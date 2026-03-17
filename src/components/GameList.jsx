import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GameList(){

  const [games,setGames] = useState([])

  useEffect(()=>{

    fetch("/api/roms")
      .then(res=>res.json())
      .then(data=>setGames(data))

  },[])

  return(

    <div>

      {/* LOGO */}
      <div style={{
        display:"flex",
        justifyContent:"center",
        marginTop:"40px",
        marginBottom:"30px"
      }}>

        <img
          src="/icone.gif"
          style={{
            width:"180px"
          }}
        />

      </div>

      {/* GRID DE JOGOS */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, 250px)",
        gap:"30px",
        justifyContent:"center",
        padding:"40px"
      }}>

        {games.map(game=>{

          const name = game.replace(/\.[^/.]+$/, "")
          const cover = `/covers/${name}.png`

          return(

            <Link
              key={game}
              to={`/play?rom=${game}`}
              style={{textDecoration:"none",color:"white"}}
            >

              <div style={{textAlign:"center"}}>

                <img
                  src={cover}
                  style={{
                    width:"250px",
                    borderRadius:"10px",
                    boxShadow:"0 5px 15px rgba(0,0,0,0.5)"
                  }}
                />

                <p style={{marginTop:"10px"}}>
                  {name}
                </p>

              </div>

            </Link>

          )

        })}

      </div>

    </div>

  )

}