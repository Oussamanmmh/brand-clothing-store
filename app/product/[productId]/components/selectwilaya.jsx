"use client";

export default function WilayaSelector({ register ,errors ,watch}) {
    const wilayas = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra",
        "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret",
        "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda",
        "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem",
        "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj",
        "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras",
        "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
      ];
      
  
 const selectedWilaya = watch("wilaya");
  return (
    <div className='text-black w-full relative'>
      <select 
      className='bg-gray px-4 py-2 rounded-lg w-full border border-white text-white outline-none'
        id="wilaya-select"
        value={selectedWilaya}
        {...register("wilaya",{required:{value:true , message :"Wilaya is required"}})}
      >
        <option value="">🗺️ Wilaya </option>
        {wilayas.map((wilaya, index) => (
          <option key={index} value={wilaya}>
            {wilaya}
          </option>
        ))}
      </select>
      {errors.wilaya && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.wilaya.message}</p>)}
    </div>
  );
}
