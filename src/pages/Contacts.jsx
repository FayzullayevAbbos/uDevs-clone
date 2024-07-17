/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

const Contacts = () => {
  const [form] = Form.useForm();
  function sendToTelegramBot(event) {
    const token = "7012841524:AAG9C_93leiSPTovp8uX9aaoAm9kf_sA5_g";
    const botId = 6965624520;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: botId,
        text: `
Name : ${event.name}
Email:${event.email}
Messege: ${event.TextArea}
`,
      },
    })
      .then(() => {
        form.resetFields();
        message.info("success");
      })
      .catch(() => {
        console.log("Xato");
      });
  }

  return (
    <div id='contact' className='py-20'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-20 mx-5 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]'>
          Contact us
        </h1>
        <div className='boxshadow px-5  lg:px-24 pb-20 pt-10'>
          <p className='mb-5 text-xl font-semibold leading-[30px] text-[#0f001a]'>
            Leave us a message
          </p>
          <div className='flex flex-col lg:flex-row gap-12'>
            <div className='lg:w-[50%] w-full'>
              <Form
                form={form}
                onFinish={sendToTelegramBot}
                layout='vertical'
              >
                <Form.Item
                  name={"name"}
                  label='Name'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input type='text' size='large' />
                </Form.Item>
                <Form.Item
                  name={"email"}
                  label='Email'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input type='email' size='large' />
                </Form.Item>
                <Form.Item
                  label='TextArea'
                  name='TextArea'
                  rules={[
                    { required: true, message: "Please input!" },
                  ]}
                >
                  <Input.TextArea size='large' />
                </Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='h-11 lg:w-60 w-full text-center rounded-md bg-[#1b5bf7] text-xl font-semibold mt-4 leading-6 text-white outline-none transition duration-300 hover:scale-[1.07]'
                >
                  ok
                </Button>
              </Form>
            </div>
            <div className='lg:w-[50%] w-full'>
              <div className='mb-5 flex items-center gap-2'>
                <LocationOnIcon className='text-[#1b5bf7]' />
                <p className='leading-[22px] text-[#0f001a]'>
                  Tashkent, Yashobod tumani
                </p>
              </div>
              <div className='mb-5 flex items-center gap-2'>
                <PhoneIcon className='text-[#1b5bf7]' />
                <p className='leading-[22px] text-[#0f001a]'>
                  +998 91 119 55 67
                </p>
              </div>
              <div className='mb-5 flex items-center gap-2'>
                <MailOutlineIcon className='text-[#1b5bf7]' />
                <p className='leading-[22px] text-[#0f001a]'>
                  abbosfayzullayev202@gmail.com
                </p>
              </div>
              <div className='mb-5 flex items-center gap-2'>
                <TelegramIcon className='text-[#1b5bf7]' />
                <p className='font-bold leading-[22px] text-[#1b5bf7]'>
                  t.me/abboss03
                </p>
              </div>
              <div className='mb-5 flex gap-3'>
                <YouTubeIcon className='h-6 w-6 text-[#1b5bf7]' />
                <InstagramIcon className='h-6 w-6 text-[#1b5bf7]' />
                <FacebookIcon className='h-6 w-6 text-[#1b5bf7]' />
                <TwitterIcon className='h-6 w-6 text-[#1b5bf7]' />
              </div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6639772134163!2d69.24984851136269!3d41.31617307118929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e0!3m2!1sen!2s!4v1720989199231!5m2!1sen!2s'
                className='h-[250px] w-full'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
