import * as React from 'react'
import { ForkOutlined } from '@ant-design/icons';
import { Card, List, Popover } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Tree, TreeNode } from 'react-organizational-chart';

import InfoTreePreviewInfo from './InfoTreePreviewInfo'

import './index.css'
const InfoTree = (infoTreeData: any) => {

  let [parentNode, setParentNode] = React.useState<any>([])
  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])

  const [isL2ItemsOpen, setIsL2ItemsOpen] = React.useState(false)
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(false)

  const [categoryIndexLandingLegs, setCategoryIndexLandingLegs] = React.useState<any>(false)
  const [categoryIndexEngines, setCategoryIndexEngines] = React.useState<any>(false)
  const [categoryIndexFins, setCategoryIndexFins] = React.useState<any>(false)
  const [categoryIndexBody, setCategoryIndexBody] = React.useState<any>(false)
  const [categoryIndexTanks, setCategoryIndexTanks] = React.useState<any>(false)

  React.useEffect(() => {
    setParentNode(infoTreeData.props.raw.L2Items);
    groupedCtegories(parentNode)
  }, [infoTreeData.props.raw.L2Items, parentNode])


  const groupedCtegories = (elements: any) => {
    elements.map((element: any) => {

      const groupedSubCategories = groupBy(element.L3Items, "Id")
      elements = [groupedSubCategories]
      setL2ParentNode(elements)

      return groupedSubCategories
    })
  }

  const openInfoTreeGroup =(categoryName:any, event:any) => {
    event.preventDefault();
    // event.stopPropagination();  
    if(categoryName == "Landing_Legs") {      
      setCategoryIndexLandingLegs(!categoryIndexLandingLegs);
    }

    if (categoryName == "Engines") {      
      setCategoryIndexEngines(!categoryIndexEngines);
    }

    if(categoryName == "Fins") {      
      setCategoryIndexFins(!categoryIndexFins);
    }

    if (categoryName == "Body") {      
      setCategoryIndexBody(!categoryIndexBody);
    }

    if(categoryName == "Tanks") {      
      setCategoryIndexTanks(!categoryIndexTanks);
    }


  }
  



  const groupBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };


  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={
        <Card
          className='infoTreeCard'
         
        >
          <Meta title={infoTreeData.props.raw.Name} description={infoTreeData.props.raw.Description} />
        </Card>
      }
    >

      {parentNode?.map((L2Item: any) => {
       
        // L2ParentNode[0] ? console.log("L2ParentNode", Object.entries(L2ParentNode[0])) : null
        return (
          <TreeNode label={
            <Card
              className='infoTreeCard'
              
            >
              <Meta title={L2Item.Name} description={L2Item.Description} />
              {
                L2ParentNode[0] ?
                  <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode[0]).map((Categories: any) => {
                    return (
                      <TreeNode label={
                        <>
                       <Card
                        className='infoTreeCard'
                        onClick={(event) => openInfoTreeGroup(Categories[0], event)}
                        >
                          <Meta title={Categories[0]} />
                          {Categories[0] =="Landing_Legs" &&  categoryIndexLandingLegs == true? 
 
                          <List
                          // id={index.toString()}
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              
                              <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                 
                                <List.Item
                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                              </Popover>
                            )}
                          />
                          :Categories[0] =="Engines" &&  categoryIndexEngines == true?
                          <List
                          // id={index.toString()}
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              
                              <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                 
                                <List.Item
                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                              </Popover>
                            )}
                          />
                          :Categories[0] =="Fins" &&  categoryIndexFins == true?
                          <List
                          // id={index.toString()}
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              
                              <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                 
                                <List.Item
                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                              </Popover>
                            )}
                          />
                          :Categories[0] =="Body" &&  categoryIndexBody == true? 
 
                          <List
                          // id={index.toString()}
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              
                              <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                 
                                <List.Item
                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                              </Popover>
                            )}
                          />
                          :Categories[0] =="Tanks" &&  categoryIndexTanks == true? 
 
                          <List
                          // id={index.toString()}
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              
                              <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                 
                                <List.Item
                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                              </Popover>
                            )}
                          />
                          :null}
                        </Card>
                        </>
                      }>
                      </TreeNode>
                    )
                  })}>
                  </TreeNode>
                  : null
              }
            </Card>
          } />
        )
      }
      )}

    </Tree>
  );
}

export default InfoTree;