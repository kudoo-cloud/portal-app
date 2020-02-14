<script>
  import Tailwindcss from "../Tailwindcss.svelte";
  import Select from "svelte-select";
  import { db, userEmail, userFirstName, userLastName } from "../stores.js";

  const items = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua and barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia and herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "côte d'ivoire", label: "Côte d'Ivoire" },
    { value: "cabo verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central african republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo (congo-brazzaville)", label: "Congo (Congo-Brazzaville)" },
    { value: "costa rica", label: "Costa Rica" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czechia (czech republic)", label: "Czechia (Czech Republic)" },
    {
      value: "democratic republic of the congo",
      label: "Democratic Republic of the Congo"
    },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican republic", label: "Dominican Republic" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el salvador", label: "El Salvador" },
    { value: "equatorial guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    {
      value: 'eswatini (fmr. "swaziland")',
      label: 'Eswatini (fmr. "Swaziland")'
    },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea-bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "holy see", label: "Holy See" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar (formerly burma)", label: "Myanmar (formerly Burma)" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north korea", label: "North Korea" },
    { value: "north macedonia", label: "North Macedonia" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "palestine state", label: "Palestine State" },
    { value: "panama", label: "Panama" },
    { value: "papua new guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint kitts and nevis", label: "Saint Kitts and Nevis" },
    { value: "saint lucia", label: "Saint Lucia" },
    {
      value: "saint vincent and the grenadines",
      label: "Saint Vincent and the Grenadines"
    },
    { value: "samoa", label: "Samoa" },
    { value: "san marino", label: "San Marino" },
    { value: "sao tome and principe", label: "Sao Tome and Principe" },
    { value: "saudi arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south africa", label: "South Africa" },
    { value: "south korea", label: "South Korea" },
    { value: "south sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "timor-leste", label: "Timor-Leste" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad and tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united arab emirates", label: "United Arab Emirates" },
    { value: "united kingdom", label: "United Kingdom" },
    { value: "united states of america", label: "United States of America" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" }
  ];

  let selectedValue = undefined;
  let orgType = '';
  let name = '';
  let structure = '';
  let acceptedTerms = false;

  var docRef = $db.collection("users").doc($userEmail);

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log(doc.data().firstName);
        userFirstName.update(n => doc.data().firstName);
        userLastName.update(n => doc.data().lastName);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

  let currentStep = 1;
  let appCreated = false;

  function firstStep() {
    currentStep = 1;
  }
  function secondStep() {
    var userRef = $db.collection("users").doc($userEmail);
    // Set the "capital" field of the city 'DC'
    userRef
      .update({
        country: selectedValue.value
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    currentStep = 2;
  }
  function applicationCreated() {
    if (acceptedTerms === false) {
      return
    }
    var userRef = $db.collection("users").doc($userEmail);
    // Set the "capital" field of the city 'DC'
    userRef
      .update({
        app: {
          structure: structure,
          type: orgType,
          name: name
        }
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    appCreated = true;
  }
</script>

<style>
  h1 {
    @apply text-k-dark-purple text-5xl;
  }

  h2 {
    @apply text-k-green text-3xl;
  }
  h3 {
    @apply text-k-light-purple text-2xl;
  }

  h4 {
    @apply text-k-dark-gray text-xl;
  }
  .logo {
    @apply py-16 mr-auto ml-auto;
  }

  .portal {
    @apply mr-auto ml-auto;
  }

  div {
    @apply bg-k-grey;
  }
</style>

<main>
  {#if !appCreated}
    <img class="logo" src="images/whitegreenlogo.png" alt="background image" />
    <h1 class="portal">PORTAL</h1>
    <h2>Create your first application</h2>
    {#if currentStep === 1}
      <div id="step-one">
        <h3>Personal Info</h3>
        <h4>Tell us more about you</h4>
        <input required placeholder="First name" value={$userFirstName} />
        <br />
        <input required placeholder="Last name" value={$userLastName} />
        <br />
        <Select required {items} bind:selectedValue />
        <br />
        <button on:click={secondStep}>Next</button>
      </div>
    {:else}
      <div id="step-two">
        <h1>Application type</h1>
        <input type="radio" name="org-type" bind:group={orgType} value="Individual" />
        Individual
        <br />
        <input type="radio" name="org-type" bind:group={orgType} value="Company" />
        Company
        <br />
        <input placeholder="Company name" bind:value={name} />
        <br />
        Select a structure
        <select bind:value={structure} value="commercial">
          <option value="commercial">Commercial</option>
          <option value="non-commercial">Non-commercial</option>
          <option value="ngo">Not for profit</option>
        </select>
        <input type="checkbox" />
        Do you agree to our Terms and Conditions?
        <br />
        <button on:click={firstStep}>Go back</button>
        <button on:click={applicationCreated}>Done</button>
      </div>
    {/if}
  {:else}
    <Portal />
  {/if}
</main>
