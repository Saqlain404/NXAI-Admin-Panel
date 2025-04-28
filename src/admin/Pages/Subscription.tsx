import { useState } from 'react';
import { Table, Collapse, Flex, Button, Modal, Form, Input} from "antd";
import type { TableProps } from "antd";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { CaretRightOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { TextArea } = Input;

interface DataTypeEdu {
  key: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

interface DataTypeQtm {
  key: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

const colors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-red-100 text-red-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
];



const EducationData: DataTypeEdu[] = [
  {
    key: "1",
    title: "AI for Business & Leisure",
    price: "$97",
    duration: "One-Day Course - (3hrs) LIVE",
    description:
      "The perfect AI starter course! Hands-on, engaging, and designed to deliver immediate value for business and leisure.",
    features: [
      "One-Day Live Session Access.",
      "AI Tools Intro: Save time and boost efficiency.",
      "Free Course Materials: Guides and notes.",
      "AI Use Case Templates: Practical examples.",
      "Business AI Checklist: Key integration steps.",
      "AI Business Basics Course.",
      "Certificate of Completion.",
    ],
  },
  {
    key: "2",
    title: "AI Accelerator 2025",
    price: "$497",
    duration: "4 Weeks (2 Hours Live Weekly)",
    description:
      "Master AI with this expert-led course! Gain tools, insights, and support to confidently integrate AI into your business.",
    features: [
      "4 Live Sessions: Interactive, real-world learning.",
      "AI Guide: Step-by-step setup instructions.",
      "Business Roadmap: Scale AI in your business.",
      "NXAI Trial: Test our platform risk-free.",
      "AI Templates: Revolutionize workflows.",
      "Worksheets: Track your progress easily.",
      "ROI Tools: Measure AI’s financial impact.",
      "Community Access: Join mentors and peers.",
      "Certificate: Showcase your achievement.",
      "Money-Back Guarantee: Zero risk, all reward.",
    ],
  },
  {
    key: "3",
    title: "Elite AI Implementation",
    price: "$11,997",
    duration: "12 Weeks",
    description:
      "Ready to scale with AI? This program blends expert guidance and hands-on support for transformative business success.",
    features: [
      "Weekly Guided Sessions: Tailored one-on-one support.",
      "Custom NXAI System: Build your AI solution with us.",
      "Dedicated AI Coach: Personal guidance for 12 weeks.",
      "AI Transformation Toolkit: Integrate AI seamlessly.",
      "Elite NXAI Access: Unlimited premium platform use.",
      "AI Employee Setup: Optimized for your workflows.",
      "Progress Audits: Regular reviews for success.",
      "Growth Workshop: Advanced strategies to boost profits.",
      "Elite Community: Connect with industry leaders.",
      "Mastery Certificate: Showcase your transformation.",
      "Guaranteed Results: Money-back if no measurable improvement.",
    ],
  },
];

const QuantumData: DataTypeQtm[] = [
  {
    key: "1",
    title: "Quantum trial",
    price: "$327/mth",
    description: "Your First AI Employee",
    features: [
      "Customer Service",
      "1 Landing Page",
      "Calendar + SMS Notifications",
      "Social Media Planner",
      "Database Management",
      "AI Business Basics Course",
      "Save 10-20 hours/week",
      "Data & Phone Usage Extra*",
      "3 Extra Mentorship Sessions.",
    ],
  },
  {
    key: "2",
    title: "Quantum 8",
    price: "$927/mth",
    description: "Build Your AI Team",
    features: [
      "Direct Profit tools",
      "SoftConnect",
      "AI Command centre",
      "Finance360",
      "Doc360",
      "Sites360",
      "Partner Launch",
      "Resource Leveraging Service",
      "8xBoost your business mentorship sessions",
      "AI Accelerator course",
      "Spotlight session on your business",
      "Monthly group trainings",
      "Setup fee at $660 and bonus 30 days free",
    ],
  },
  {
    key: "3",
    title: "Quantum 12",
    price: "$1,627/mth",
    description: "Build Your AI Team",
    features: [
      "Direct Profit tools",
      "SoftConnect",
      "AI Command Centre",
      "Finance360",
      "Doc360",
      "Sites360",
      "PartnerLaunch",
      "Resource Leveraging Service",
      "Memberships360",
      "Custom Code Lab",
      "Auto Growth Engine",
      "ADS360",
      "12x VIP Founder mentorship sessions",
      "AI Accelerator course",
      "Spotlight session on your business",
      "Monthly group trainings",
      "$5000 Custom AI tool build FREE",
    ],
  },
];
const Subscription = () => {
  const [educationData, setEducationData] = useState<DataTypeEdu[]>(EducationData);
  const [quantumData, setQuantumData] = useState<DataTypeQtm[]>(QuantumData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataTypeEdu | DataTypeQtm | null>(null);
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState<'education' | 'quantum'>('education');

  const showModal = (tab: 'education' | 'quantum', item?: DataTypeEdu | DataTypeQtm) => {
    setActiveTab(tab);
    if (item) {
      setCurrentItem(item);
      form.setFieldsValue(item);
    } else {
      form.resetFields();
      setCurrentItem(null);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      const newItem = {
        ...values,
        key: currentItem ? currentItem.key : `${Date.now()}`,
        features: values.features.split('\n').filter((f: string) => f.trim() !== '')
      };

      if (activeTab === 'education') {
        if (currentItem) {
          setEducationData(educationData.map(item => 
            item.key === currentItem.key ? newItem : item
          ));
        } else {
          setEducationData([...educationData, newItem]);
        }
      } else {
        if (currentItem) {
          setQuantumData(quantumData.map(item => 
            item.key === currentItem.key ? newItem : item
          ));
        } else {
          setQuantumData([...quantumData, newItem]);
        }
      }

      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleDelete = (key: string, tab: 'education' | 'quantum') => {
    if (tab === 'education') {
      setEducationData(educationData.filter(item => item.key !== key));
    } else {
      setQuantumData(quantumData.filter(item => item.key !== key));
    }
  };

  const columnsEdu: TableProps<DataTypeEdu>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Features",
      key: "features",
      dataIndex: "features",
      render: (_, { features }) => (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={`click to expand`}
            key="1"
            className="site-collapse-custom-panel"
          >
            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`p-2 my-1 text-xs rounded-md border-l-4 ${
                    colors[index % colors.length].split(" ")[0]
                  } ${colors[index % colors.length]}`}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => showModal('education', record)}
          />
          <Button 
            type="link" 
            danger
            icon={<DeleteOutlined  />} 
            onClick={() => handleDelete(record.key, 'education')}
          />
        </div>
      ),
    },
  ];
  const columnsQtm: TableProps<DataTypeQtm>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Features",
      key: "features",
      dataIndex: "features",
      render: (_, { features }) => (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={`click to expand`}
            key="1"
            className="site-collapse-custom-panel"
          >
            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`p-2 my-1 text-xs rounded-md border-l-4 ${
                    colors[index % colors.length].split(" ")[0]
                  } ${colors[index % colors.length]}`}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => showModal('quantum', record)}
          />
          <Button 
            type="link" 
            danger
            icon={<DeleteOutlined/>} 
            onClick={() => handleDelete(record.key, 'quantum')}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-screen z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col bg-slate-900">
        <Header />
        <div className="p-6 overflow-y-auto flex flex-col space-y-6 my-12">
          <div className="flex items-center justify-between">
          <h2 className="text-white text-3xl font-bold">Education Series</h2>
          <Flex gap="small" wrap>
          <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={() => showModal('education')}
              >
                Education Plan
              </Button>
          </Flex>
          </div>
          <div className="bg-white rounded-lg shadow">
            <Table<DataTypeEdu>
              columns={columnsEdu}
              dataSource={EducationData}
              // pagination={{ pageSize: 1, hideOnSinglePage: true }}
            />
          </div>
          <div className="flex items-center justify-between mt-8">
          <h2 className="text-white text-3xl font-bold ">Quantum plans</h2>
          <Flex gap="small" wrap>
          <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={() => showModal('quantum')}
              >
                Quantum plan
              </Button>
          </Flex>
          </div>
          <div className="bg-white rounded-lg shadow">
            <Table<DataTypeQtm>
              columns={columnsQtm}
              dataSource={QuantumData}
              // pagination={{ pageSize: 1, hideOnSinglePage: true }}
            />
          </div>
        </div>
        <Modal
          title={currentItem ? `Edit ${activeTab === 'education' ? 'Education' : 'Quantum'} Plan` : `Add ${activeTab === 'education' ? 'Education' : 'Quantum'} Plan`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={700}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input the price!' }]}
            >
              <Input />
            </Form.Item>

            {activeTab === 'education' && (
              <Form.Item
                name="duration"
                label="Duration"
                rules={[{ required: true, message: 'Please input the duration!' }]}
              >
                <Input />
              </Form.Item>
            )}

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the description!' }]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="features"
              label="Features (one per line)"
              rules={[{ required: true, message: 'Please input at least one feature!' }]}
            >
              <TextArea 
                rows={6} 
                placeholder="Enter each feature on a new line"
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Subscription;
