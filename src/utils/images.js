import heroLab from '../assets/images/hero-lab-dark.png'
import heroServices from '../assets/images/hero-services.png'
import heroAbout from '../assets/images/hero-about.png'
import biochemistry from '../assets/images/lab-biochemistry.png'
import microscope from '../assets/images/lab-microscope.png'
import microbiology from '../assets/images/lab-microbiology.png'
import clinicalPathology from '../assets/images/lab-clinical-pathology.png'
import genetics from '../assets/images/lab-genetics.png'
import homeCollection from '../assets/images/lab-home-collection.png'
import reportsDigital from '../assets/images/lab-reports-digital.png'
import labInterior from '../assets/images/lab-interior.png'
import booking from '../assets/images/lab-booking.png'
import support from '../assets/images/lab-support.png'
import featuredTest from '../assets/images/lab-featured-test.png'

export const IMAGES = {
  hero: heroLab,
  heroServices,
  heroAbout,
  biochemistry,
  microscope,
  microbiology,
  clinicalPathology,
  genetics,
  homeCollection,
  reports: reportsDigital,
  interior: labInterior,
  booking,
  support,
  featuredTest,
}

/** One unique image per department — no repeats */
export const SERVICE_IMAGES = {
  biochemistry,
  hematology: microscope,
  microbiology,
  'clinical-pathology': clinicalPathology,
  genetics,
}

/** Unique pillar visuals on Home */
export const PILLAR_IMAGES = [homeCollection, booking, reportsDigital, support]
