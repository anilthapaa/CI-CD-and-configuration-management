const { fetchWeather } = require('../src/weather');

// Mock global fetch for Node.js/Jest
global.fetch = jest.fn();

describe('Weather CLI', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches weather for a valid city', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        main: { temp: 25 },
        name: 'Kathmandu',
        weather: [{ description: 'clear sky' }]
      })
    });

    const data = await fetchWeather('Kathmandu');
    expect(data).toHaveProperty('temperature');
    expect(data).toHaveProperty('city');
    expect(data).toHaveProperty('condition');
  });

  test('throws an error for invalid city', async () => {
    fetch.mockResolvedValue({ ok: false });
    await expect(fetchWeather('InvalidCityName12345')).rejects.toThrow();
  });
});