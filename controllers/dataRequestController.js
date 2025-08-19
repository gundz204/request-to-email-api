const DataRequest = require('../models/DataRequest');
const nodemailer = require('nodemailer');

exports.createDataRequest = async (req, res) => {
    try {
        const { title, email } = req.body;

        if (!title || !email) {
            return res.status(400).json({ message: 'Title and email are required' });
        }

        // 1. Simpan ke MongoDB
        const newRequest = new DataRequest({ title, email });
        const savedRequest = await newRequest.save();

        // 2. URL detail request
        const detailUrl = `http://localhost:5000/api/data-request/detail-request/${savedRequest._id}`;

        // 3. Kirim email dengan Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"PERBERITAHUAN DATA MAINTENANCE REQUEST BARU" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Konfirmasi Data Request',
            text: `Dear , ada data maintenance request baru. Lihat detail di: ${detailUrl}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="color: #4CAF50;">Dear Head Dept,</h2>
                    <p>Ada Data Maintenance Request Baru.</p>
                    <p>Untuk konfirmasi request, klik tombol di bawah ini:</p>
                    <a href="${detailUrl}" target="_blank" 
                        style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; 
                               color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                        Konfirmasi Request
                    </a>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'Data request created and email sent successfully',
            data: savedRequest
        });

    } catch (error) {
        res.status(500).json({ message: 'Error creating data request', error: error.message });
    }
};

exports.getDetailRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await DataRequest.findById(id);

        if (!request) {
            return res.status(404).json({ message: 'Data request not found' });
        }

        res.status(200).json({
            message: 'Detail request retrieved successfully',
            data: request
        });

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data request', error: error.message });
    }
};


// controllers/gameController.js
exports.checkRandomNumber = async (req, res) => {
    try {
        const { guess } = req.body; // angka tebakkan dari user

        if (!guess || guess.toString().length !== 4) {
            return res.status(400).json({ message: 'Masukkan tebakan berupa 4 angka' });
        }

        // generate angka random 4 digit
        const randomNumber = Math.floor(1000 + Math.random() * 9000);

        // cek hasil
        const isWin = parseInt(guess) === randomNumber;

        res.status(200).json({
            message: isWin ? 'Selamat! Anda Menang 🎉' : 'Maaf, Anda Kalah 😢',
            yourGuess: guess,
            generatedNumber: randomNumber,
            result: isWin ? 'win' : 'lose'
        });

    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }
};
