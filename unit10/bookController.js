// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require('uuid');// 랜덤하게 생성하는 uuid.. 이걸 몰라서 너무 오래걸렸다 ..
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);// 
  },
  // [GET] /book/:phone 요청을 수행합니다.
  // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const {phone} = req.params;
    let booked = booking
    booked = phone ? booked.filter((data)=>phone === data.phone) : null

    return res.status(200).json(booked)
  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
  // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req,res) => {
    const {phone, flight_uuid} = req.params;
    // TODO:
    let booked = booking
    booked = phone&&flight_uuid ? booked.filter((data)=>(phone === data.phone && flight_uuid === data.flight_uuid)) : null
    return res.status(200).json(booked)
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    // POST /book에서 사용할 booking_uuid입니다.
    const booking_uuid = uuid();
    // TODO:
    const booked_data = {
      booking_uuid: booking_uuid,
      flight_uuid: req.body.flight_uuid,
      name: req.body.name,
      phone: req.body.phone,
    };
    booking.push(booked_data);
    return res.status(201).json(booking)
  },

  // Optional
  // [DELETE] /book/:booking_uuid 요청을 수행합니다.
  // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteByBookingId: (req, res) => {
    const {booking_uuid} = req.params;
    // TODO:
    let booked_data = booking
    if(booking){
      booked_data = booked_data.filter((data)=>{
        booking_uuid !== data.uuid
      })
    }
    return res.status(201).json(booking)
  }
};
