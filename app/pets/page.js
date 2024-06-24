import { getPets } from '@/lib/pets';
import Image from 'next/image';

export default async function PetsPage() {
  const pets = await getPets();
  console.log(pets);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Customers also bought
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {pets.map((pet, index) => (
            <div key={pet.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    key={index}
                    src={pet.image}
                    alt={pet.description}
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {pet.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{pet.gender}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {pet.contact_information}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={pet.slug}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag
                  <span className="sr-only">, {pet.creator_email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
