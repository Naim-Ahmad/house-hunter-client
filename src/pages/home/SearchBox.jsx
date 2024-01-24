
export default function SearchBox() {

  return (
    <>
      <div className="text-white" style={{ height: 'auto', overflow: 'visible', transition: 'height 200ms ease' }}>
        <div>
          <div>
            <div>
              <span>Please enter a destination or hotel</span>
            </div>
            <form data-test-id="search-controls">
              <div>
                <div>
                  <label htmlFor="destination-autosuggest" title="Where do you want to stay?">Where do you want to stay?</label>
                  <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false">
                    <input
                      type="text"
                      id="destination-autosuggest"
                      name="destination-autosuggest"
                      autoComplete="off"
                      aria-autocomplete="list"
                      aria-controls="react-autowhatever-1"
                      placeholder="Enter destination or hotel name"
                      aria-invalid="true"
                      value=""
                      data-testid="destination-autosuggest"
                      
                      spellCheck="false"
                      aria-activedescendant="react-autowhatever-1--item-0"
                    />
                    <div id="react-autowhatever-1" role="listbox"></div>
                  </div>
                </div>
                <div data-test-id="search-controls-datesguest">
                  <div>
                    <div>
                      <label htmlFor="checkin" title="Check-in">Availability Date</label>
                      <div>
                        <input
                          type="text"
                          id="checkin"
                          name="checkin_input"
                          aria-invalid="false"
                          value="31/01/2024"
                          readOnly
                          placeholder="Check-in"
                          data-testid="checkin-selector"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="checkout" title="Check-out">Check-out</label>
                      <div>
                        <input
                          type="text"
                          id="checkout"
                          name="checkout_input"
                          aria-invalid="false"
                          value="01/02/2024"
                          readOnly
                          placeholder="Check-out"
                          data-testid="checkout-selector"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="guests-rooms" title="Guests and rooms">Guests and rooms</label>
                      <div>
                        <input
                          type="text"
                          id="guests-rooms"
                          name="guests-rooms"
                          readOnly
                          aria-readonly="false"
                          value="2 adults, 1 room"
                          data-test-id="guests-rooms"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" data-test-id="search-button">
                  <span>Search hotels</span>&nbsp;
                  <span style={{ lineHeight: '1.5rem', display: 'inline-block', marginTop: '0rem', verticalAlign: 'top' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem' }}>
                      <path d="M11.293 19.713a1 1 0 001.414 0l7-7a1 1 0 000-1.414l-7-7a1 1 0 00-1.438 1.39l.024.024 5.293 5.293H5a1 1 0 000 2h11.586L11.293 18.3a1 1 0 000 1.414z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}