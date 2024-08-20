import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    midName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-2 ">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="firstName"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            First name
          </label>
          <br />
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Dev"
            value={formData.firstName}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="midName"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Middle name
          </label>
          <br />
          <input
            required
            type="text"
            name="midName"
            id="midName"
            placeholder="Raj"
            value={formData.lastName}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="lastName"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Last name
          </label>
          <br />
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Singh"
            value={formData.lastName}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="email"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <br />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="dev@abcd.com"
            value={formData.email}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="country"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Country
          </label>
          <br />
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>

          <br />
          <label
            htmlFor="streetAddress"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Street Address
          </label>
          <br />
          <input
            required
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="R-9C"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="city"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            City
          </label>
          <br />
          <input
            required
            type="text"
            name="city"
            id="city"
            placeholder="Patna"
            value={formData.city}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="state"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            State
          </label>
          <br />
          <input
            required
            type="text"
            name="state"
            id="state"
            placeholder="Bihar"
            value={formData.state}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <label
            htmlFor="postalCode"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Postal Code
          </label>
          <br />
          <input
            required
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="800024"
            value={formData.postalCode}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <br />
          <br />
          <fieldset>
            <legend className="text-gray-700 text-sm font-bold mb-2">
              By Email
            </legend>

            <div className="flex">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
              />
              <div>
                <label
                  htmlFor="comments"
                  className="text-gray-700 text-sm font-bold mb-2"
                >
                  Comments
                </label>
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={changeHandler}
              />
              <div>
                <label
                  htmlFor="candidates"
                  className="text-gray-700 text-sm font-bold mb-2"
                >
                  Candidates
                </label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <div>
                <label
                  htmlFor="offers"
                  className="text-gray-700 text-sm font-bold mb-2"
                >
                  Offers
                </label>
                <p>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </fieldset>

          <br />
          <fieldset>
            <legend className="text-gray-700 text-sm font-bold mb-2">
              Push Notifications
            </legend>
            <p>These are delivered via SMS to your mobile phone.</p>

            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
            />

            <label
              htmlFor="pushEverything"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              Everything
            </label>

            <br />
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
            />

            <label
              htmlFor="pushEmail"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              Same as email
            </label>

            <br />
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
            />

            <label
              htmlFor="pushNothing"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              No Push Notifications
            </label>
          </fieldset>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
