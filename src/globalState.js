import { atom } from "recoil";

const qrvisible = atom({
  key: "qrvisible",
  default: false,
});
const settingvisible = atom({
  key: "settingvisible",
  default: false,
});

const searchbarvisible = atom({
  key: "searchbarvisible",
  default: false,
});
const patientsearchbarinput = atom({
  key: "patientsearchbarinput",
  default: "",
});
const patientfilterinput = atom({
  key: "patientfilterinput",
  default: "",
});
const appointmentsearchbarvisible = atom({
  key: "appointmentsearchbarvisible",
  default: false,
});
const appointmentsearchbarinput = atom({
  key: "appointmentsearchbarinput",
  default: "",
});
const appointmentfilterinput = atom({
  key: "appointmentfilterinput",
  default: "",
});


const statusfilter = atom({
  key:"statusfilter",
  default:""
})

const ongoingpatient = atom({
  key: " ongoingpatient",
  default:""
})

const doctororpatient = atom({
  key:"doctororpatient",
  default:""
})

export {
  qrvisible,
  settingvisible,
  searchbarvisible,
  patientsearchbarinput,
  patientfilterinput,
  appointmentsearchbarvisible,
  appointmentsearchbarinput,
  appointmentfilterinput,
  statusfilter,
  ongoingpatient,
  doctororpatient,
};
