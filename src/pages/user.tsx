import { useCotization } from '@hooks/use-cotization'
import {
  CAR_BRANDS,
  FUEL_TYPES,
  LOCATIONS,
  TRANSMISSION_TYPES,
  USAGES
} from '@src/constants'

export function UserPage() {
  const {
    cotization,
    cotizationCost,
    handleChange,
    handleSubmit,
    modelOptions
  } = useCotization()

  const formattedPrice = '$' + cotizationCost

  return (
    <>
      <main>
        <h1>Cotización de Automóviles</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Año del vehículo:
            <input
              type='number'
              name='year'
              required
              min={1900}
              max={new Date().getFullYear()}
              value={cotization.year}
              onChange={handleChange}
            />
          </label>

          <label>
            Marca del vehículo:
            <select
              name='brand'
              value={cotization.brand}
              onChange={handleChange}
              required
            >
              <option
                value=''
                disabled
              >
                Seleccionar marca
              </option>
              {CAR_BRANDS.map(brand => (
                <option
                  key={brand}
                  value={brand}
                >
                  {brand}
                </option>
              ))}
            </select>
          </label>

          <label>
            Modelo del vehículo:
            <select
              name='model'
              disabled={!modelOptions}
              value={cotization.model}
              onChange={handleChange}
              required
            >
              <option
                value=''
                disabled
              >
                Seleccionar modelo
              </option>
              {modelOptions &&
                modelOptions.map(model => (
                  <option
                    key={model}
                    value={model}
                  >
                    {model}
                  </option>
                ))}
            </select>
          </label>

          <label>
            Tipo de combustible:
            <select
              name='fuelType'
              value={cotization.fuelType}
              onChange={handleChange}
              required
            >
              {FUEL_TYPES.map(fuel => (
                <option
                  key={fuel}
                  value={fuel}
                >
                  {fuel}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tipo de transmisión:
            <select
              name='transmissionType'
              value={cotization.transmissionType}
              onChange={handleChange}
              required
            >
              {TRANSMISSION_TYPES.map(transmission => (
                <option
                  key={transmission}
                  value={transmission}
                >
                  {transmission}
                </option>
              ))}
            </select>
          </label>

          <label>
            Número de puertas:
            <select
              name='numberOfDoors'
              value={cotization.numberOfDoors}
              onChange={handleChange}
              required
            >
              <option value='4'>4 puertas</option>
              <option value='2'>2 puertas</option>
            </select>
          </label>

          <label>
            Ubicación del vehículo:
            <select
              name='location'
              value={cotization.location}
              onChange={handleChange}
              required
            >
              {LOCATIONS.map(location => (
                <option
                  key={location}
                  value={location}
                >
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label>
            Uso del vehículo:
            <select
              name='usage'
              value={cotization.usage}
              onChange={handleChange}
              required
            >
              {USAGES.map(usage => (
                <option
                  key={usage}
                  value={usage}
                >
                  {usage}
                </option>
              ))}
            </select>
          </label>

          <button type='submit'>Generar Cotización</button>

          <input
            type='text'
            name='price'
            disabled
            value={formattedPrice}
            onChange={handleChange}
            required
          />
        </form>
      </main>
    </>
  )
}
