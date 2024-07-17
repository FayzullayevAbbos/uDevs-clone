/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import {
  CloseOutlined,
  PaperClipOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Form, Input, message } from "antd";

function Messege({ openSms, setOpenSms }) {
  const [form] = Form.useForm()

  function onClose() {
    setOpenSms(false);
  }
  return (
    <>
      <div
        onClick={() => setOpenSms(true)}
        className='  fixed z-50 right-10 bottom-6 shadow-xl rounded-xl cursor-pointer '
      >
        <span className=' absolute right-3 top-1 bg-red-500 px-1 rounded-lg'>
          <p className='text-white text-[14px]'>1</p>
        </span>
        <img
          className=' w-20  py-3  '
          src='https://www.macworld.com/wp-content/uploads/2023/12/messages-app-icon-9.png'
          alt='sf'
        />
      </div>
      <Drawer
        id='sms'
        placement={"right"}
        headerStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }} // Header uslubini qo'shamiz
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // padding: "8px 0",
            }}
          >
            <div className='flex justify-center items-center gap-4'>
              <h1 className='text-[30px] font-extrabold  font-sans'>
                Re:
              </h1>
              <div className='flex flex-col justify-start'>
                <p className='font-normal'>Udevs</p>
                <div className='flex  items-center justify-center gap-2'>
                  <div className='w-2 h-2 font-light bg-green-400 rounded-[50%] '></div>
                  <p className='text-[12px] font-normal text-gray-400'>
                    Welcome
                  </p>
                </div>
              </div>
            </div>

            <Button
              type='text'
              icon={<CloseOutlined />}
              onClick={onClose}
              style={{ fontSize: "16px" }}
            />
          </div>
        }
        onClose={onClose}
        visible={openSms}
        bodyStyle={{ padding: 0 }}
        style={{ width: "100%" }} // Bu yerda kenglikni 100% qilamiz
      >
        <Form form={form} className='w-full px-3 mb-5 relative'>
          <div className=' absolute bottom-7 left-4 z-50  w-8 px-2 rounded-lg h-8 '>
            <PaperClipOutlined className="w-full h-full text-[25px] " />
          </div>
          <div onClick={()=>{
            form.resetFields()
            message.info('access')
          }} className=' absolute bottom-7 right-4 z-50 bg-blue-600 w-8 px-2 rounded-lg h-8'>
            <SendOutlined  className="w-full h-full text-[25px] text-white" />
          </div>
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
            
              className='w-full px-10'
              placeholder='messege'
              type='email'
              size='large'
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default Messege;
