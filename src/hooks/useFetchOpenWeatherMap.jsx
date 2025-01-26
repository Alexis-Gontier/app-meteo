import { useState, useEffect } from "react";

export function useFetchOpenWeatherMap(city) {

  if (!import.meta.env.VITE_PUBLIC_API_KEY) {
    console.error("Pas de clé API ! rajoute la dans un .env avec VITE_PUBLIC_API_KEY=");
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${import.meta.env.VITE_PUBLIC_API_KEY}`

  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }
        const result = await response.json()
        setWeatherData(result)
      } catch (error) {
        setError(error.message || "Erreur inconnue")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return { weatherData, loading, error }
}