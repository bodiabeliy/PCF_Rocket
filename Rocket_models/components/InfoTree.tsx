import * as React from 'react'
import { ForkOutlined, NodeCollapseOutlined, NodeExpandOutlined } from '@ant-design/icons';
import { Card, List, Popover } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Tree, TreeNode } from 'react-organizational-chart';

import InfoTreePreviewInfo from './InfoTreePreviewInfo'
import L3Modules from './L3Modules'

import './index.css'
const InfoTree = (infoTreeData: any) => {

  let [parentNode, setParentNode] = React.useState<any>([])

  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(false)
  const [parentTrees, setParentTrees] = React.useState<boolean>(false)


  const [selectedParentCategory, setSelectedParentCategory] = React.useState("")
  const [isSelectedParentCategory, setIsSelectedParentCategory] = React.useState<boolean>(false)


  const groupedCtegories = (groupedElements: any) => {
    groupedElements.map((element: any) => {

      const groupedSubCategories = groupBy(element.L3Items, "Category")
      groupedElements  =[groupedSubCategories]
      setL2ParentNode(groupedElements);
      return groupedSubCategories;
    })
  }

  const openParentTrees = (parentCategoryName: any) => {
    console.log("parentNode", parentNode);

    for (let parentCategory of parentNode) {      
        if (parentCategory.Name == parentCategoryName) {
          console.log("parentCategoryName", parentCategoryName);
          setSelectedParentCategory(parentCategory.Name)
          setIsSelectedParentCategory(!isSelectedParentCategory)
          groupedCtegories(parentNode)
        }
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

  React.useEffect(() => {
    setParentNode(infoTreeData.props.raw.L2Items);
  }, [L2ParentNode[0], infoTreeData])


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

      {

        parentNode?.map((L2Item: any, L2Index: any) => {

          return (
            <TreeNode label={
              <Card
                className='infoTreeCard'

              >
                <Meta
                  avatar={
                    <NodeExpandOutlined onClick={() => openParentTrees(L2Item.Name)} />}
                  title={L2Item.Name}
                  description={L2Item.Description}
                />
                {L2ParentNode[0] && L2Item.Name == selectedParentCategory && isSelectedParentCategory ?
                  <>
                    <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode[0]).map((Categories: any, indx: any) => {

                      return (
                        
                        <L3Modules categoryModules={Categories} categoryIndex={indx} categoriesList={L2ParentNode[0]} />
                      )
                    })}>
                    </TreeNode>
                  </> : null
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