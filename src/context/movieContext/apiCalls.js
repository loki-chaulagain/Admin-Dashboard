import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"




export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const res = await axios.get("/movies", {
            headers: {

                //NOTE WHY THIS IS NOT WORKING
                // "token": "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken  //local storage bata token leko


                "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDc2OTQ4OSwiZXhwIjoxNjUxNjMzNDg5fQ.sBCj84zlWoBkQQqv7QvGY9X7ntfXMF-0C9a0BkkGz8A  "
            }
        })
        dispatch(getMoviesSuccess(res.data))

    } catch (error) {
        dispatch(getMoviesFailure())


    }

}